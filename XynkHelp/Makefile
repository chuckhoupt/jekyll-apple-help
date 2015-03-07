
HELP = $(TARGET_BUILD_DIR)/$(UNLOCALIZED_RESOURCES_FOLDER_PATH)

$(HELP) : * **/*
	mkdir -p "$(HELP)"
	[[ -s "$(HOME)/.rvm/environments/default" ]] && source "$(HOME)/.rvm/environments/default" && jekyll build --destination "$(HELP)"
	find "$(HELP)" -name '*.lproj' -exec hiutil -1 -vvvv --create --anchors -e index.html --locale=English --file "{}/search.helpindex" "{}" 2>&1 \; | awk "{ if (/error:/) {printf \"error: \" ; err = 1} ; print} END {exit err}"
