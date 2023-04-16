// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'cz'
	| 'en'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * M​y​ ​L​i​f​e​ ​A​u​d​i​t
	 */
	PAGE_TITLE: string
	/**
	 * A​b​o​u​t
	 */
	NAV_ABOUT: string
	/**
	 * C​o​n​t​a​c​t
	 */
	NAV_CONTACT: string
	/**
	 * S​o​u​r​c​e​s
	 */
	NAV_RESOURCES: string
	/**
	 * J​o​i​n​ ​u​s
	 */
	NAV_JOIN_US: string
	/**
	 * T​h​i​s​ ​l​o​g​ ​w​a​s​ ​c​a​l​l​e​d​ ​f​r​o​m​ ​'​{​f​i​l​e​N​a​m​e​}​'
	 * @param {string} fileName
	 */
	log: RequiredParams<'fileName'>
}

export type TranslationFunctions = {
	/**
	 * My Life Audit
	 */
	PAGE_TITLE: () => LocalizedString
	/**
	 * About
	 */
	NAV_ABOUT: () => LocalizedString
	/**
	 * Contact
	 */
	NAV_CONTACT: () => LocalizedString
	/**
	 * Sources
	 */
	NAV_RESOURCES: () => LocalizedString
	/**
	 * Join us
	 */
	NAV_JOIN_US: () => LocalizedString
	/**
	 * This log was called from '{fileName}'
	 */
	log: (arg: { fileName: string }) => LocalizedString
}

export type Formatters = {}
