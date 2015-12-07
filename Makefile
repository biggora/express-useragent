
build:
	grunt

push:
	git push origin master
	git push mirror master

lint:
	jshint lib/express-useragent.js

http:
	node test/http.js

help:
	@echo "## WORKFLOW"
	@echo "  make build                # Minify js"
	@echo "  make push                 # Push changes to repos"
	@echo "  make lint                 # Check js"
	@echo "  make http                 # Start http server"


.PHONY: build push
