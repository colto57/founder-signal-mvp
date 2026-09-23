#!/usr/bin/env python3
"""Inline app/index.html into a single shareable file, dist/founder-signal-mvp.html.

Reads app/index.html, replaces the stylesheet link with an inline <style>, and every
local <script src="..."> (including ../data/data.js) with an inline <script>. The
Chart.js CDN tag is kept as is. Prints the output size.

Usage: python3 build/build_dist.py
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APP = ROOT / "app"
DIST = ROOT / "dist"
OUT = DIST / "founder-signal-mvp.html"


def read(path: Path) -> str:
    if not path.exists():
        sys.exit(f"missing file: {path}")
    return path.read_text(encoding="utf-8")


def safe_inline_script(src: str) -> str:
    # A literal "</script>" inside inlined JS or JSON would close the tag early.
    return src.replace("</script", "<\\/script")


def safe_inline_style(src: str) -> str:
    return src.replace("</style", "<\\/style")


def main() -> None:
    html = read(APP / "index.html")

    # Stylesheet links to local files.
    def style_repl(match: re.Match) -> str:
        href = match.group("href")
        css = read((APP / href).resolve())
        return f"<style>\n{safe_inline_style(css)}\n</style>"

    html, n_css = re.subn(
        r'<link\s+rel="stylesheet"\s+href="(?P<href>[^"]+)"\s*/?>',
        style_repl,
        html,
    )

    # Local scripts (anything not starting with http:// or https:// or //).
    inlined: list[str] = []
    kept: list[str] = []

    def script_repl(match: re.Match) -> str:
        src = match.group("src")
        if re.match(r"^(https?:)?//", src):
            kept.append(src)
            return match.group(0)  # keep CDN tags untouched
        js = read((APP / src).resolve())
        inlined.append(src)
        return f"<script>\n{safe_inline_script(js)}\n</script>"

    html = re.sub(
        r'<script\s+src="(?P<src>[^"]+)"\s*>\s*</script>',
        script_repl,
        html,
    )

    DIST.mkdir(parents=True, exist_ok=True)
    OUT.write_text(html, encoding="utf-8")
    size = OUT.stat().st_size
    print(f"wrote {OUT.relative_to(ROOT)}: {size:,} bytes ({size / 1024 / 1024:.2f} MB)")
    print(f"inlined {n_css} stylesheet(s) and {len(inlined)} script(s): {', '.join(inlined)}")
    print(f"kept {len(kept)} CDN tag(s) as is: {', '.join(kept)}")


if __name__ == "__main__":
    main()
