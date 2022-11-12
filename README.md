## Minimalistic blog based on Next.js and .md files.

The main idea is that your posts will be stored locally as .md files. You don't need to use any external CMS service.
This approach makes your website hard to hack.

### Planned features

- [x] TypeScript support
- [x] Server-side rendering
- [X] Import posts from .md files
- [X] Dark theme support
- [ ] Category and tags support
- [ ] Use React testing library
- [ ] Custom 404 page
- [ ] Update to next 13
- 
## Quick setup

1. Clone repository `gh repo clone yrogovich/next-blog`
2. Install dependencies `yarn install`
3. Run develompent server `yarn dev`
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Availible commands:

```bash
yarn dev
yarn build
yarn start
yarn lint
yarn lint,
yarn prepare
```

## Commit Message Convention

This website follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

Commit message will be checked
using [husky and commit lint](https://theodorusclarence.com/library/husky-commitlint-prettier), you can't commit if not
using the proper convention below.

### Format

`<type>(optional scope): <description>`
Example: `feat(pre-event): add speakers section`

### 1. Type

Available types are:

- feat → Changes about addition or removal of a feature. Ex: `feat: add table on landing page`
  , `feat: remove table from landing page`
- fix → Bug fixing, followed by the bug. Ex: `fix: illustration overflows in mobile view`
- docs → Update documentation (README.md)
- style → Updating style, and not changing any logic in the code (reorder imports, fix whitespace, remove comments)
- chore → Installing new dependencies, or bumping deps
- refactor → Changes in code, same output, but different approach
- ci → Update github workflows, husky
- test → Update testing suite, cypress files
- revert → when reverting commits
- perf → Fixing something regarding performance (deriving state, using memo, callback)
- vercel → Blank commit to trigger vercel deployment. Ex: `vercel: trigger deployment`

### 2. Optional Scope

Labels per page Ex: `feat(pre-event): add date label`

\*If there is no scope needed, you don't need to write it

### 3. Description

Description must fully explain what is being done.

Add BREAKING CHANGE in the description if there is a significant change.

**If there are multiple changes, then commit one by one**

- After colon, there are a single space Ex: `feat: add something`
- When using `fix` type, state the issue Ex: `fix: file size limiter not working`
- Use imperative, and present tense: "change" not "changed" or "changes"
- Don't use capitals in front of the sentence
- Don't add full stop (.) at the end of the sentence

#### Old Commit tags (deprecated)

`[global]` - project global changes, config updates

`[npm]` - add/remove/update packages

`[docs]` - update docs, readme

`[style]` - style updates

`[rwd]` - adaptive updates

`[api]` - api updates

`[public]` - public images, fonts and etc updates

`[posts]` - blog posts updates

`[page]` - page updates

`[section]` - section updates

`[component]` - component updates

## Versions

| Tool | Version |
|------|---------|
| Node | 18.7.0  |
| Yarn | 1.22.19 |

## Useful resources

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) - TypeScript quick start
  guide.
- [Conventional commits](https://www.conventionalcommits.org) - Conventional Commits specification.
- [Color name](https://www.color-blindness.com/color-name-hue/) - Hex color naming tool.
- [Favicon generator](https://realfavicongenerator.net/)
- [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/) - Atomic design methodology.
- [Atomic categorizer](https://dan503.github.io/Atomic-Categorizer/) - Atomic categorizer tool.
