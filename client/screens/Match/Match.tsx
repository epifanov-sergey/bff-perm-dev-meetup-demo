import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageHeader, Breadcrumb, Row, Col, Typography } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useMatchQuery } from '$types/graphql';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import * as Styled from './styled';
import { Container } from './styled';

export const Match: React.FC = () => {
  const { id } = useParams();
  const { data } = useMatchQuery({ variables: { id } });

  return (
    <PageHeader title="Страница матча">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">
            <HomeOutlined />
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Матч {id}</Breadcrumb.Item>
      </Breadcrumb>
      {data ? (
        <Styled.Container>
          <Row>
            <Col span={12}>
              <Typography.Paragraph>
                {format(
                  new Date(`${data.match.date}T${data.match.kickOff}`),
                  'dd MMMM yyyy HH:mm',
                  {
                    locale: ru,
                  }
                )}
              </Typography.Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Typography.Title level={4}>
                {data.match.homeTeam.name} {data.match.homeScore}-{data.match.awayScore}{' '}
                {data.match.awayTeam.name}
              </Typography.Title>
            </Col>
          </Row>
        </Styled.Container>
      ) : null}
    </PageHeader>
  );
};
