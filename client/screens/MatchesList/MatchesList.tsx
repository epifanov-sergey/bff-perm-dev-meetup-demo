import React from 'react';
import { useMatchesQuery } from '$types/graphql';
import { List, Typography, PageHeader } from 'antd';
import * as Styled from './styled';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Link } from 'react-router-dom';

export const MatchesList = () => {
  const { data } = useMatchesQuery();

  return (
    <PageHeader title="Список матчей">
      {data ? (
        <Styled.ListWithWidth
          bordered
          split
          dataSource={data?.matches}
          renderItem={({ homeTeam, awayTeam, date, kickOff, id }, index) => {
            const formatted = format(new Date(`${date}T${kickOff}`), 'dd MMMM yyyy HH:mm', {
              locale: ru,
            });
            const CardComponent = index % 2 ? Styled.GreenCard : Styled.RedCard;
            return (
              <Link to={`/${id}`}>
                <CardComponent>
                  <List.Item>
                    <Typography.Paragraph>
                      {homeTeam.name} - {awayTeam.name}
                    </Typography.Paragraph>
                    <Typography.Paragraph>{formatted}</Typography.Paragraph>
                  </List.Item>
                </CardComponent>
              </Link>
            );
          }}
        />
      ) : (
        'Подождите...'
      )}
    </PageHeader>
  );
};
