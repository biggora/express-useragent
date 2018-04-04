
build:
	grunt

push:
	git push origin master

lint:
	jshint lib/express-useragent.js

http:
	node test/http.js

help:
	@echo "  make build                # minify js"
	@echo "  make push                 # push changes to repositories"
	@echo "  make lint                 # check js"
	@echo "  make http                 # start http server"
