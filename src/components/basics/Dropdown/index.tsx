import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { style } from './style';
import { InputText } from '../InputText';
import { Paragraph } from '../TextCustom';

interface IDropdownProps {
  data: any[];
  placeholder: string;
  value: string;
  onChange: (obj: any) => void;
  maxHeight?: number;
  searchable?: boolean;
  searchValue?: string;
  onSearch?: (text: string) => void;
  placeholderSearch?: string;
  labelField?: string;
  valueField?: string;
}

export const DropdownComponent: React.FC<IDropdownProps> = ({
  data,
  placeholder,
  value,
  onChange,
  maxHeight = 300,
  searchable = false,
  onSearch = () => {},
  searchValue = '',
  placeholderSearch = 'Search item',
  labelField = 'label',
  valueField = 'label',
}) => {
  const [_data, setData] = useState<any[]>([]);

  useEffect(() => {
    setData(data);
  }, []);

  const filterData = (text: string) => {
    if (onSearch) {
      onSearch(text);
    }
    if (!text) {
      setData(data);
    } else {
      const newData = data.filter((item) => {
        return item[labelField].toLowerCase().includes(text.toLowerCase());
      });
      setData(() => [...newData]);
    }
  };

  return (
    <Dropdown
      style={[style.dropdownButton]}
      placeholderStyle={style.placeholder}
      selectedTextStyle={style.selectedTextStyle}
      renderInputSearch={() => (
        <InputText
          customStyle={style.inputSearch}
          onChange={(text) => filterData(text)}
          value={searchValue}
          placeholder={placeholderSearch}
        />
      )}
      search={searchable}
      data={_data}
      maxHeight={maxHeight}
      placeholder={placeholder}
      value={value}
      onChange={(item) => {
        onChange(item);
      }}
      renderItem={({ label }) => (
        <View style={style.item}>
          <Paragraph title={label} />
        </View>
      )}
      labelField={labelField}
      valueField={valueField}
      containerStyle={{ borderWidth: 0 }}
    />
  );
};
