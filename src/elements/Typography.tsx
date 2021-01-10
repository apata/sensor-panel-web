import styled from "styled-components";

export const Heading1 = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  line-height: ${({ theme }) => theme.typography.h1.lineHeight};
  margin: ${({ theme }) => theme.spacing.d2}px 0;
`;

export const Heading2 = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  line-height: ${({ theme }) => theme.typography.h2.lineHeight};
  margin: ${({ theme }) => theme.spacing.d2}px 0
    ${({ theme }) => theme.spacing.d1}px;
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.typography.body1.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  margin-top: ${({ theme }) => theme.spacing.d1}px;
`;
