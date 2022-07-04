# 🖨 `loxygenK/nextjs-template`

My template for Next.js application.

## 📦 Set up environments

- Next.js
- `eslint-plugin-simple-import-sort`
- Prettier
- TailwindCSS
- Autoprefixer
- Some hooks

## 🪄 Scripts

| Script | Behavior |
| :----- | :------- |
| `dev`  | Start development server. |
| `lint` | Launch linter without auto-fix. Runs ESLint and Prettier. |
| `fix`  | Like `lint`, but with auto-fix, and runs prettier first. |

## 💨 Hooks

| Timing | Behavior |
| :----- | :------- |
| `pre-commit` | Runs lint-staged, and run auto-fix for ESLint and Prettier. |
| `post-checkout` | Runs `pnpm i` to synchronize the installation. |

## 👮 Action

When the pull request is opened, or synchronized (like the commits have been pushed),
runs ESLint and Prettier individually with caching. This action also runs at `main` branch
to provide cache at the first run on a newly opened PR.

# 📝 License
MIT
