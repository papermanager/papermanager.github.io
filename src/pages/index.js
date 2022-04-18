import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>

        <div>
          <img className="margin--xs" src="https://img.shields.io/github/v/release/papermanager/papermanager" alt="GitHub release (latest by date)" />
          <img className="margin--xs" src="https://img.shields.io/badge/Joomla!-4.x-yellow" alt="Joomla4x" />
          <img className="margin--xs" src="https://img.shields.io/badge/Joomla!-3.x-yellow" alt="Joomla3x" />
          <img className="margin--xs" src="https://img.shields.io/badge/php-%3E%3D8.0-787CB5" alt="PHP80" />
          <img className="margin--xs" src="https://img.shields.io/github/license/papermanager/papermanager" alt="License" />
        </div>

        <div className={clsx('margin-top--md', styles.buttons)}>
          <a
            className={clsx('button button--secondary button--lg margin--sm', styles.githubButton)}
            href="https://github.com/papermanager/papermanager"
            target="_blank">
            <span className={styles.githubIcon}></span> <span>GitHub</span>
          </a>
          <Link
            className="button button--secondary button--lg margin--sm"
            to={useBaseUrl('download')}>
            Download
          </Link>
          <Link
            className="button button--secondary button--lg margin--sm"
            to={useBaseUrl('docs/introduction-to-paper-manager')}>
            Get Started
          </Link>
        </div>

        <div className="margin-top--md">
          ⭐️ If you like Paper Manager, give it a star on <a className={styles.textUnderlineLink} href="https://github.com/papermanager/papermanager" target="_blank">GitHub</a> ⭐️
        </div>

        <div className="margin-top--md">
          <small>
            <i>
              Paper Manager is developed for <strong>Joomla 4.x</strong> and any future updates will be checked for compatibility only with <strong>4.x</strong>.
              <br/>
              If you need to install Paper Manager on <strong>Joomla 3.x</strong>, use <a className={styles.textUnderlineLink} href="https://github.com/papermanager/papermanager/releases/tag/v0.0.1-joomla3.x" target="_blank">version 0.0.1-joomla3.x</a>.
            </i>
          </small>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
