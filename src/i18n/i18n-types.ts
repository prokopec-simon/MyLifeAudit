// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'cs'
	| 'en'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * t​y​p​e​s​a​f​e​-​i​1​8​n​ ​-​ ​S​v​e​l​t​e​ ​F​a​l​l​ ​S​u​m​m​i​t​ ​{​y​e​a​r​}
	 * @param {number} year
	 */
	title: RequiredParams<'year'>
	/**
	 * W​e​l​c​o​m​e​ ​t​o​ ​S​v​e​l​t​e​ ​F​a​l​l​ ​S​u​m​m​i​t​ ​{​y​e​a​r​}
	 * @param {number} year
	 */
	welcome: RequiredParams<'year'>
	/**
	 * {​0​}​ ​l​i​v​e​ ​s​p​e​c​t​a​t​o​r​{​{​s​}​}
	 * @param {string | number | boolean} 0
	 */
	spectators: RequiredParams<'0'>
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
	summit: {
		/**
		 * {​0​|​s​i​m​p​l​e​D​a​t​e​}
		 * @param {Date} 0
		 */
		schedule: RequiredParams<'0|simpleDate'>
	}
	/**
	 * T​h​i​s​ ​l​o​g​ ​w​a​s​ ​c​a​l​l​e​d​ ​f​r​o​m​ ​'​{​f​i​l​e​N​a​m​e​}​'
	 * @param {string} fileName
	 */
	log: RequiredParams<'fileName'>
}

export type TranslationFunctions = {
	/**
	 * typesafe-i18n - Svelte Fall Summit {year}
	 */
	title: (arg: { year: number }) => LocalizedString
	/**
	 * Welcome to Svelte Fall Summit {year}
	 */
	welcome: (arg: { year: number }) => LocalizedString
	/**
	 * {0} live spectator{{s}}
	 */
	spectators: (arg0: string | number | boolean) => LocalizedString
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
	summit: {
		/**
		 * {0|simpleDate}
		 */
		schedule: (arg0: Date) => LocalizedString
	}
	/**
	 * This log was called from '{fileName}'
	 */
	log: (arg: { fileName: string }) => LocalizedString
}

export type Formatters = {
	simpleDate: (value: Date) => unknown
}
