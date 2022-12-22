import { InjectionToken } from '@angular/core';

export interface MetaConfigOg {
  title: string;
  description: string;
  type: string;
  locale?: string;
  siteName?: string;
  image: string;
  imageType: string;
  imageWidth: string;
  imageHeight: string;
}

export interface MetaConfig {
  readonly title: string;
  readonly description: string;
  readonly keywords: string;
  readonly url?: string;
}

export const META_CONFIG = new InjectionToken<MetaConfig>('MetaConfig');
export const META_CONFIG_OG = new InjectionToken<MetaConfigOg>('MetaConfigOg');

export const META_CONFIG_DEFAULT: MetaConfig = {
  title: 'Тренажерний зал Olympia-Kosiv',
  // eslint-disable-next-line max-len
  description:
    'Пропонуємо комфортне тренування у спортивному залі оснащеному якісним обладнанням та приємними цінами у місті Косів',
  keywords: 'Тренажерний зал, душ, спорт зал, GYM, фітнес клуб косів',
};

export const META_CONFIG_OG_DEFAULT: MetaConfigOg = {
  title: META_CONFIG_DEFAULT.title,
  description: META_CONFIG_DEFAULT.description,
  type: 'website',
  image: '/assets/meta/meta.jpg',
  imageType: 'image/jpeg',
  imageWidth: '1200',
  imageHeight: '600',
};
