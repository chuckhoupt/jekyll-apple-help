# For command-line debugging, use the Jekyll default destination
TARGET_BUILD_DIR ?= _site

HELP := $(TARGET_BUILD_DIR)/$(UNLOCALIZED_RESOURCES_FOLDER_PATH)

$(HELP) : * **/*
	mkdir -p "$(HELP)"
	[[ -s "$(HOME)/.rvm/environments/default" ]] && source "$(HOME)/.rvm/environments/default" && jekyll build --destination "$(HELP)"
	for LPROJ in "$(HELP)"/*.lproj ; do \
		LANG=$$(basename "$$LPROJ" .lproj) ; \
		echo "Indexing: $$LPROJ" ; \
		hiutil -1 -vv --create --anchors --locale=$$LANG --file "$$LPROJ/search.helpindex" "$$LPROJ" 2>&1 | \
		awk "{ if (/error:/) {printf \"error: \" ; err = 1} else {printf \"warning: \"} ; print} END {exit err}" ; \
	done
