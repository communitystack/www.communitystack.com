# www.CommunityStack.com [![CircleCI Build Status](https://circleci.com/gh/communitystack/www.communitystack.com.svg?style=shield)](https://circleci.com/gh/communitystack/www.communitystack.com) [![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/communitystack/www.communitystack.com/trunk/LICENSE)

***Notice: We've rebranded. This website use to be called DiscourseHub and was located at DiscourseHub.com. After receiving a friendly nudge from Discourse the company, we've rebranded to CommunityStack. The old repository URL was https://github.com/discoursehub/www.discoursehub.com and the new one is https://github.com/communitystack/www.communitystack.com***

## Adding a New Discourse community

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
