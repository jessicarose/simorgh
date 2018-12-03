import styled from 'styled-components';
import { C_STORM } from '@bbc/psammead-styles/colours';
import { FF_NEWS_SANS_REG } from '@bbc/psammead-styles/fonts';
import { GEL_SPACING_DBL } from '../../lib/constants/styles';
import { T_BODY_COPY } from '../../lib/constants/typography';

const Paragraph = styled.p`
  color: ${C_STORM};
  font-family: ${FF_NEWS_SANS_REG};
  padding-bottom: ${GEL_SPACING_DBL};
  margin: 0;
  ${T_BODY_COPY};
`;

export default Paragraph;
