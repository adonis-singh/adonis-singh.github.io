#!/usr/bin/env python3
"""Version projects.js in index.html by its contents.

A browser may keep a file from GitHub Pages for ten minutes. With the hash in the
URL, a new index.html never runs with an old projects.js. The pre-commit hook
(tools/pre-commit) runs this on every commit.
"""
import hashlib
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
version = hashlib.sha256((ROOT / "projects.js").read_bytes()).hexdigest()[:10]
index = ROOT / "index.html"
html, n = re.subn(r'<script src="projects\.js(\?v=[0-9a-f]+)?"></script>', f'<script src="projects.js?v={version}"></script>', index.read_text(encoding="utf-8"))
if n != 1:
    raise SystemExit(f"expected one projects.js script tag in index.html, found {n}")
index.write_text(html, encoding="utf-8")
