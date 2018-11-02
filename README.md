# www.DiscourseHub.com [![CircleCI Build Status](https://circleci.com/gh/discoursehub/www.discoursehub.com.svg?style=shield)](https://circleci.com/gh/discoursehub/www.discoursehub.com) [![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/discoursehub/www.discoursehub.com/master/LICENSE)

## Adding a New Discourse Website

### Create community file (without Hugo):

Create a new Markdown file in `src/content/communities/the-name.md`. The filename should be a unique "slug" version of the Discourse site's name. The file should have the following 4 lines:

```
---
address: "full-url-with-protocol-and-without-trailing-slash"
category: "category-name"
---
```

*address:* should be the full URL of this Discourse site. Do not include a trailing forward slash at the end.

*category:* needs to be the name of a category this site belongs in. Take a look at existing categories on the site to make sure you're spelling your category name the same way.

Submit a PR with your changes. We'll help to make sure everything is right and then merge it.

### Create community file (with Hugo):

Create a new Markdown file in `src/content/communities/the-name.md` by running the following command:

```
hugo -s src new communities/the-name.md
```

Replace "the-name" with a filename that is a unique "slug" version of the Discourse site's name. Edit the file:

```
---
address: "full-url-with-protocol-and-without-trailing-slash"
category: "category-name"
---
```

*address:* should be the full URL of this Discourse site. Do not include a trailing forward slash at the end.

*category:* needs to be the name of a category this site belongs in. Take a look at existing categories on the site to make sure you're spelling your category name the same way.

You can run `./bin/pull-updates src/content/communities/the-name.md` to pull in all of the information about the Discourse site and then test the site locally with `hugo -s src serve`.

Submit a PR with your changes. We'll help to make sure everything is right and then merge it.
