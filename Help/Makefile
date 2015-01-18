
HELP = $(TARGET_BUILD_DIR)/$(TARGET_NAME)/en.lproj

$(HELP) : * **/*
	mkdir -p "$(HELP)"
	[[ -s "$(HOME)/.rvm/environments/default" ]] && source "$(HOME)/.rvm/environments/default" && jekyll build --destination "$(HELP)"
	hiutil -1 -vvv --create --anchor --file "$(HELP)/$(PROJECT_NAME).helpindex" "$(HELP)" 2>&1 | awk "{ if (/error:/) {printf \"error: \" ; err = 1} ; print} END {exit err}"

clean :
	rm -rf "$(TARGET_BUILD_DIR)/$(TARGET_NAME)"
