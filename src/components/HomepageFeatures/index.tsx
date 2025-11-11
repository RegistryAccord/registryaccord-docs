import type { ReactNode } from 'react';
import clsx from 'clsx';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--6 margin-bottom--lg')}>
      <div className={styles.featureCard}>
        <h3 className={styles.featureTitle}>{title}</h3>
        <div className={styles.featureContent}>{description}</div>
      </div>
    </div>
  );
}

const creatorItems: FeatureItem[] = [
  {
    title: 'Own your identity and audience',
    description: (
      <ul>
        <li>Your profile and followers are portable, so you keep your community wherever you go.</li>
        <li>No lock‑in: move across apps and bring your content and earnings with you.</li>
      </ul>
    ),
  },
  {
    title: 'Earn more, with clarity',
    description: (
      <ul>
        <li>Clear revenue shares across ads, tips, subscriptions, and sales mean a bigger, predictable take‑home.</li>
        <li>Straightforward reporting so you always see what you earned and why.</li>
      </ul>
    ),
  },
  {
    title: 'Publish richer experiences',
    description: (
      <ul>
        <li>Build interactive posts with text, video, polls, paywalls, and more—no special setup required.</li>
        <li>Better tools and fair payouts help you invest in higher‑quality content.</li>
      </ul>
    ),
  },
];

const consumerItems: FeatureItem[] = [
  {
    title: 'Free by default, ad‑free optional',
    description: (
      <ul>
        <li>Most content can be free because creators earn from ads.</li>
        <li>Prefer no ads? Choose an ad‑free plan for a simple fee when available.</li>
      </ul>
    ),
  },
  {
    title: 'Simple, one‑tap actions',
    description: (
      <ul>
        <li>Tip, subscribe, vote, and unlock premium content without extra hoops.</li>
        <li>Consistent, easy‑to‑use flows across many apps built on the same open standard.</li>
      </ul>
    ),
  },
  {
    title: 'Better content and more choice',
    description: (
      <ul>
        <li>Creators earn fairly and reinvest in quality, so you get better content.</li>
        <li>Pick from new interactive content types and many apps with different designs—choose what fits you.</li>
      </ul>
    ),
  },
  {
    title: 'Privacy and control',
    description: (
      <ul>
        <li>Share only what you choose, with privacy‑respecting analytics.</li>
        <li>Choose discovery feeds you trust instead of opaque, one‑size‑fits‑all algorithms.</li>
      </ul>
    ),
  },
];

const builderItems: FeatureItem[] = [
  {
    title: 'Build for an open ecosystem',
    description: (
      <ul>
        <li>Open standards and ready‑to‑use starter tools help you ship apps, plugins, and discovery feeds fast.</li>
        <li>Portable integrations work across clients that follow the protocol.</li>
      </ul>
    ),
  },
  {
    title: 'Monetize your apps and tools',
    description: (
      <ul>
        <li>Earn from ads placed by marketers inside your app experiences.</li>
        <li>Offer subscriptions for your apps, services, or creator tools and keep recurring revenue.</li>
      </ul>
    ),
  },
  {
    title: 'Scale without lock‑in',
    description: (
      <ul>
        <li>Flexible data options and event‑driven design make it easier to grow and interoperate.</li>
        <li>Choose hosting models that fit your stage without rewriting your app.</li>
      </ul>
    ),
  },
];

const brandItems: FeatureItem[] = [
  {
    title: 'Transparent ad marketplace',
    description: (
      <ul>
        <li>Run campaigns with clear pricing and live reporting you can trust.</li>
        <li>Work with creators in native, high‑signal placements that audiences value.</li>
      </ul>
    ),
  },
  {
    title: 'Accountability by design',
    description: (
      <ul>
        <li>See where spend goes and how content performs across open, comparable surfaces.</li>
        <li>Privacy‑respecting measurement reduces risk while keeping results meaningful.</li>
      </ul>
    ),
  },
];

const marketerItems: FeatureItem[] = [
  {
    title: 'Open discovery you can plan on',
    description: (
      <ul>
        <li>User‑selectable feeds and open mechanics reduce sudden strategy‑breaking shifts.</li>
        <li>Comparable performance across clients makes testing and scaling simpler.</li>
      </ul>
    ),
  },
  {
    title: 'Lower friction, clearer attribution',
    description: (
      <ul>
        <li>Simple checkouts reduce drop‑off and improve conversion.</li>
        <li>Consent‑based analytics provide trustworthy insights without overreach.</li>
      </ul>
    ),
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.tabsContainer}>
          <Tabs
            groupId="audience"
            defaultValue="creators"
            values={[
              { label: '✨ Creators', value: 'creators' },
              { label: '👥 Consumers', value: 'consumers' },
              { label: '🛠️ Builders', value: 'builders' },
              { label: '🎯 Brands', value: 'brands' },
              { label: '📊 Marketers', value: 'marketers' },
            ]}>
            <TabItem value="creators">
              <div className="row">
                {creatorItems.map((props, idx) => <Feature key={idx} {...props} />)}
              </div>
            </TabItem>
            <TabItem value="consumers">
              <div className="row">
                {consumerItems.map((props, idx) => <Feature key={idx} {...props} />)}
              </div>
            </TabItem>
            <TabItem value="builders">
              <div className="row">
                {builderItems.map((props, idx) => <Feature key={idx} {...props} />)}
              </div>
            </TabItem>
            <TabItem value="brands">
              <div className="row">
                {brandItems.map((props, idx) => <Feature key={idx} {...props} />)}
              </div>
            </TabItem>
            <TabItem value="marketers">
              <div className="row">
                {marketerItems.map((props, idx) => <Feature key={idx} {...props} />)}
              </div>
            </TabItem>
          </Tabs>
        </div>

        <div className={styles.ctaContainer}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Explore the Protocol
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/getting-started/quickstart">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
