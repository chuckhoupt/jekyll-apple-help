
HELP = $(TARGET_BUILD_DIR)/$(LOCALIZED_RESOURCES_FOLDER_PATH)

$(HELP) : * **/*
	mkdir -p "$(HELP)"
	[[ -s "$(HOME)/.rvm/environments/default" ]] && source "$(HOME)/.rvm/environments/default" && jekyll build --destination "$(HELP)"
	hiutil -1 -vvv --create --anchor --file "$(HELP)/search.helpindex" "$(HELP)" 2>&1 | awk "{ if (/error:/) {printf \"error: \" ; err = 1} ; print} END {exit err}"
