INCLUDE_DIRECTORIES(
"${CMAKE_SOURCE_DIR}/scribus"
)

SET(LRELEASE_EXECUTABLE ${Qt5_LRELEASE_EXECUTABLE})

#Install our qm files, selected from *.qm in this directory
FILE( GLOB SCRIBUS_TS_FILES ${CMAKE_CURRENT_SOURCE_DIR}/*.ts )
MESSAGE(STATUS ${CMAKE_CURRENT_SOURCE_DIR})

#Bit of a hack, preprocess all the filenames to generate our language string, needed for -DWANT_GUI_LANG=en_GB,de_DE , etc
FOREACH(TS_FILEPATH ${SCRIBUS_TS_FILES})
  GET_FILENAME_COMPONENT(TS_FILENAME ${TS_FILEPATH} NAME)
  STRING(REGEX MATCH "\\.([0-9a-zA-Z_]*)\\." LANGSTR ${TS_FILENAME})
  STRING(REPLACE "." ""  LANGSTR ${LANGSTR})
  SET(QM_LANGS ${QM_LANGS} ${LANGSTR})
ENDFOREACH(TS_FILEPATH)

MESSAGE(STATUS "The following GUI languages will be installed: ${WANT_GUI_LANG}")

#If the user specified WANT_GUI_LANG, then we only create build/install targets for those languages
IF(WANT_GUI_LANG)
  FOREACH(TS_FILEPATH ${SCRIBUS_TS_FILES})
	GET_FILENAME_COMPONENT(TS_FILENAME ${TS_FILEPATH} NAME)
	STRING(REGEX MATCH "\\.([0-9a-zA-Z_]*)\\." LANGSTR ${TS_FILENAME})
	STRING(REPLACE "." ""  LANGSTR ${LANGSTR})
	FOREACH(WANTED_LANG ${WANT_GUI_LANG})
	  IF(LANGSTR STREQUAL WANTED_LANG)
		#MESSAGE(STATUS "You want to install ${LANGSTR}:${WANTED_LANG}")
		SET(QM_FILENAME "scribus.${LANGSTR}.qm")
		ADD_CUSTOM_TARGET("release_ts_${LANGSTR}" ALL
		  COMMAND ${LRELEASE_EXECUTABLE} ${TS_FILEPATH} -silent -qm ${QM_FILENAME}
		  DEPENDS ${TS_FILEPATH}
		)
		INSTALL(FILES "${CMAKE_CURRENT_BINARY_DIR}/${QM_FILENAME}" DESTINATION ${SHAREDIR}/translations)
	  ENDIF(LANGSTR STREQUAL WANTED_LANG)
	ENDFOREACH(WANTED_LANG)
  ENDFOREACH(TS_FILEPATH)
ELSE(WANT_GUI_LANG)
#Just install all of them
  FOREACH(TS_FILEPATH ${SCRIBUS_TS_FILES})
	GET_FILENAME_COMPONENT(TS_FILENAME ${TS_FILEPATH} NAME)
	STRING(REGEX MATCH "\\.([0-9a-zA-Z_]*)\\." LANGSTR ${TS_FILENAME})
	STRING(REPLACE "." ""  LANGSTR ${LANGSTR})
	SET(QM_FILENAME "scribus.${LANGSTR}.qm")
	ADD_CUSTOM_TARGET("release_ts_${LANGSTR}" ALL
	  COMMAND ${LRELEASE_EXECUTABLE} ${TS_FILEPATH} -silent -qm ${QM_FILENAME}
	  DEPENDS ${TS_FILEPATH}
	)
	INSTALL(FILES "${CMAKE_CURRENT_BINARY_DIR}/${QM_FILENAME}" DESTINATION ${SHAREDIR}/translations)
  ENDFOREACH(TS_FILEPATH)
ENDIF(WANT_GUI_LANG)
