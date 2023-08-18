import React from 'react';
import type { ViewStyle } from 'react-native';
import { View } from 'react-native';
import type { ListRenderItem } from '@react-native/virtualized-lists';
import type { DynamicObject, sectionedDataType } from 'src/types';

const dummySeparators = {
  highlight: () => undefined,
  unhighlight: () => undefined,
  updateProps: (_select: 'leading' | 'trailing', _newProps: unknown) =>
    undefined,
};

const SectionedListData = ({
  listData,
  renderHeading,
  renderItem,
  listContainerStyle,
}: {
  listData: sectionedDataType;
  renderHeading: React.FC<string> | undefined;
  renderItem: ListRenderItem<DynamicObject> | null | undefined;
  listContainerStyle?: ViewStyle;
}) => {
  return (
    <View style={listContainerStyle}>
      {!!renderHeading && renderHeading(listData.keyName)}
      {!!renderItem &&
        React.Children.toArray(
          listData.values.map((item: DynamicObject, index: number) =>
            renderItem({ item, index, separators: dummySeparators })
          )
        )}
    </View>
  );
};
export default SectionedListData;
