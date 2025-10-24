import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
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
      <div className="padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <div>{description}</div>
      </div>
    </div>
  );
}

const creatorItems: FeatureItem[] = [
  {
    title: 'Own Identity, Audience, and Content',
    description: (
      <ul>
        <li>Sovereign, portable identity (DIDs) and user-controlled data vaults ensure creators own their relationships and archives.</li>
        <li>No platform lock-in: move across apps and bring your audience, content, and economics with you.</li>
      </ul>
    ),
  },
  {
    title: 'Keep a Larger Share of Revenue',
    description: (
      <ul>
        <li>Transparent, programmable splits across ads, tips, subscriptions, and sales increase take-home earnings.</li>
        <li>Fiat-first payments with real-time reporting; behind-the-scenes credits ensure fair distribution without user friction.</li>
      </ul>
    ),
  },
  {
    title: 'Publish Rich, Interactive Experiences',
    description: (
      <ul>
        <li>Composable content atoms (text, video, polls, paywalls, etc.) unlock premium, interactive canvases.</li>
        <li>Higher-quality content is rewarded as monetization becomes sustainable and predictable.</li>
      </ul>
    ),
  },
];

const consumerItems: FeatureItem[] = [
  {
    title: 'Familiar, One‑Tap Payments',
    description: (
      <ul>
        <li>Fiat-native purchases, tipping, voting, and premium unlocks—no crypto complexity for everyday use.</li>
        <li>Consistent UX across many apps that implement the same open protocol.</li>
      </ul>
    ),
  },
  {
    title: 'Better Content and More Choice',
    description: (
      <ul>
        <li>Creators earn more, reinvest in quality, and ship richer interactive content.</li>
        <li>Open ecosystem means many builders can create many clients and discovery experiences to choose from.</li>
      </ul>
    ),
  },
  {
    title: 'Privacy and Control',
    description: (
      <ul>
        <li>Selective data sharing with privacy-preserving analytics and clear consent flows.</li>
        <li>User-selectable discovery engines reduce opaque algorithmic lock‑in.</li>
      </ul>
    ),
  },
];

const builderItems: FeatureItem[] = [
  {
    title: 'Build for the Open World',
    description: (
      <ul>
        <li>Open, interoperable protocols with typed schemas, conformance tests, and reference fixtures.</li>
        <li>One‑command local devstack, SDKs, and CLI to ship clients, plugins, and discovery engines fast.</li>
      </ul>
    ),
  },
  {
    title: 'Monetize Your Apps and Plugins',
    description: (
      <ul>
        <li>Revenue shares, rendering micro‑fees, premium modules, and marketplace distribution.</li>
        <li>Universal identifiers and vault APIs make integrations portable across clients.</li>
      </ul>
    ),
  },
  {
    title: 'Flexible Data Architecture',
    description: (
      <ul>
        <li>Dual data vaults (cloud + decentralized) with DID auth and universal schemas.</li>
        <li>Eventing and storage backends designed for scale and interoperability.</li>
      </ul>
    ),
  },
];

const brandItems: FeatureItem[] = [
  {
    title: 'Transparent Ad Marketplace',
    description: (
      <ul>
        <li>Fiat-priced auctions with real-time, auditable reporting and clear revenue shares.</li>
        <li>Native, creator-aligned placements improve signal and outcomes.</li>
      </ul>
    ),
  },
  {
    title: 'Governance and Accountability',
    description: (
      <ul>
        <li>Policy-aligned controls and visibility into delivery and spend across open surfaces.</li>
        <li>Privacy-preserving analytics reduce risk while maintaining campaign fidelity.</li>
      </ul>
    ),
  },
];

const marketerItems: FeatureItem[] = [
  {
    title: 'Trustable, Open Discovery',
    description: (
      <ul>
        <li>User-selectable algorithms and open surfaces minimize sudden strategy-breaking shifts.</li>
        <li>Transparent mechanics and reporting make performance comparable across clients.</li>
      </ul>
    ),
  },
  {
    title: 'Outcomes You Can Plan For',
    description: (
      <ul>
        <li>Fiat-first flows reduce conversion friction; better attribution via consented, privacy-safe analytics.</li>
        <li>Predictable placements and interoperable inventory across an open network of apps.</li>
      </ul>
    ),
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <Tabs
          groupId="audience"
          defaultValue="creators"
          values={[
            { label: 'Creators', value: 'creators' },
            { label: 'Consumers', value: 'consumers' },
            { label: 'Builders', value: 'builders' },
            { label: 'Brands', value: 'brands' },
            { label: 'Digital Marketers', value: 'marketers' },
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

        <div className="margin-top--lg text--center">
          <Link className="button button--primary button--lg" to="/docs/intro">
            Learn the Protocol
          </Link>
          <Link className="button button--secondary button--lg margin--sm" to="/docs/getting-started/quickstart">
            Build Your First App
          </Link>
          <Link className="button button--secondary button--lg margin--sm" to="/docs/getting-started/architecture">
            Architecture
          </Link>
        </div>
      </div>
    </section>
  );
}
