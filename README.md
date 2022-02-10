# Auto-building video showcase website generated with Gatsby
A static, Gatsby-generated website that is built and deployed via github actions.

This is a web video portfolio for my video creation buisness that is linked to a Vimeo video collection. A 'build and deploy' should be triggered from a remote api call (<a ref=https://github.com/goulchen/vimeo_channel_update_checker>by this app</a>) each time the vimeo collection changes (adding, deleting or changing the order of the videos)

The build is triggered either by a new git push or by a remote cron-scheduled python script that checks if the content of the collection has changed, then dispatch a build to tha github actions api if so.


