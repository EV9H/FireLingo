import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card as RNRCard, Text } from 'rnr-ui';

type CardProps = {
  title: string;
  description: string;
  onPress?: () => void;
};

export const Card: React.FC<CardProps> = ({ title, description, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <RNRCard>
        <Text variant="title">{title}</Text>
        <Text variant="body">{description}</Text>
      </RNRCard>
    </TouchableOpacity>
  );
};
