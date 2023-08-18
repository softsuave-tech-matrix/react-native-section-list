import React from 'react';
import {
  FlatList,
  SafeAreaView,
  type ViewStyle,
  type FlatListProps,
} from 'react-native';
import type { ListRenderItem } from '@react-native/virtualized-lists';
import { modifySectionList } from './utils';
import SectionedListData from './SectionedListData';
import { Text } from 'react-native';
import type { DynamicObject, sectionedDataType } from './types';

interface Props
  extends Omit<FlatListProps<sectionedDataType>, 'renderItem' | 'data'> {
  jsonKey: string;
  isDate?: boolean;
  childContainerStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  renderHeading?: React.FC<string>;
  renderItem: ListRenderItem<DynamicObject> | null | undefined;
  data: DynamicObject[];
}

function SectionList(props: Props) {
  const {
    jsonKey,
    isDate = false,
    renderHeading,
    containerStyle,
    childContainerStyle,
    renderItem,
    data,
  } = props;
  const sectionListData: sectionedDataType[] | null = modifySectionList(
    data,
    jsonKey,
    isDate
  );

  return (
    <SafeAreaView style={containerStyle}>
      {sectionListData && sectionListData?.length > 0 ? (
        <FlatList
          {...props}
          data={sectionListData}
          renderItem={({ item }) => (
            <SectionedListData
              listData={item}
              renderItem={renderItem}
              renderHeading={renderHeading}
              listContainerStyle={childContainerStyle}
            />
          )}
          keyExtractor={
            props.keyExtractor || ((_item, index) => index.toString())
          }
        />
      ) : (
        <Text>No Data Found</Text>
      )}
    </SafeAreaView>
  );
}

export default SectionList;
