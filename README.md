# React Native Section List

The react-native-section-list package is a library for React Native applications that simplifies the rendering and handling of lists. It provides a customizable component, SectionList, which allows you to display and iterate through a list of items, along with optional heading and item rendering functionalities.

# React Native SectionList Example

<img src="https://github.com/softsuave-tech-matrix/react-native-section-list/blob/master/demo.gif" width="360">

## Installation

Download the package with npm

```sh
npm install react-native-section-list
```

In order for react-native-section-list to work, you also need to install the moment

```sh
npm install moment  
```

## Usage

```js
import SectionList from 'react-native-section-list';
```

```jsx
 <SectionList
        jsonKey={'category'}
        isDate={true}
        containerStyle={styles.container}
        childContainerStyle={undefined}
        data={DATA}
        renderHeading={(title) => (
          <Text style={styles.headerText}>{title}</Text>
        )}
        renderItem={({ item, index }: { item: any; index?: number }) => (
          <Text key={index}>{JSON.stringify(item)}</Text>
        )}
      />
```

## Props

All the `FlatList` props can be passed.

| **Prop**                    | **Type**                         | **Description**                                                                                
| --------------------------- | -------------------------------- | ----------------------------------------------------------------------|
| `jsonKey`                  | `string`                         | Extracts unique identifiers from the data (Required)                  |                        
| `isDate`                    | `boolean`                        | indicates whether to sort data by date.                               |
| `containerStyle`            | `ViewStyle`                      | Styling for the main container that holds the list.                   |                        
| `childContainerStyle`       | `ViewStyle`                      | Additional styling for the child container that wraps                 |      
| `renderHeading`             | `React.FC<any>`                  | renders each item in the list .                                       |
| `data`                      | `Array<any>`                     | An array of data to render in the FlatList (Required)                 |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

