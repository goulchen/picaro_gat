# Auto-building video showcase website generated with Gatsby
A static, Gatsby-generated website that is built and deployed via github actions.

This is a web video portfolio for my video creation buisness that is linked to a Vimeo video collection. A 'build and deploy' will be triggered from a remote api call each time the vimeo collection changes (adding, deleting or changing the order of the videos)

The build is triggered either by a new git push or by a remote cron-scheduled python script that checks if the content of the collection has changed, then dispatch a build to tha github actions api if so. It seems that the python script could be-cron scheduled and run inside a new github action if the required libraries could be somehow installed. That's something to look into for the next update.


