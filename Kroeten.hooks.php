<?php

/**
 * Hooks for the Kroeten Extension
 */
class KroetenHooks {

	/**
	 * Load resources
	 */
	static function onBeforePageDisplay( OutputPage &$out, Skin &$skin ) {
		$out->addModules( [ 'ext.kroeten' ] );
	}
}
