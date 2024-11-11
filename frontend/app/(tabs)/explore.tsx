import * as React from 'react';
import { View } from 'react-native';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { Text } from '~/components/ui/text';

export default function TabsScreen() {
  const [value, setValue] = React.useState('account');
  return (
    <View className='flex-1 justify-center p-6'>
      <Card>
        <Text>123</Text>
      </Card>
    </View>
  );
}