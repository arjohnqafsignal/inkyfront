/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import { Helmet } from 'react-helmet';

export default function NotFound() {
  return (
    <h1>
      <Helmet title="Inky - 404page" />
      <FormattedMessage {...messages.header} />
    </h1>
  );
}
