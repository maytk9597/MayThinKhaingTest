import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {BLACK, PRIMARYTXTCOLOR} from '../styles/colors';
import {windowWidth} from '../styles/mixins';
import {fetchUsageAPI} from '../utils';
export default usageCard = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    await fetchUsageAPI('2022-10-23').then(data => {
      {
        setData(data);
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={{alignItems: 'center', paddingBottom: 40}}>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={(data, index) => {
          const item = data.item;
          const height = item.data * 10;
          return (
            <View style={styles.container}>
              <View
                style={{
                  height: `${height}%`,
                  width: 12,
                  marginVertical: 10,
                  marginHorizontal: 20,
                  borderRadius: 20,
                  backgroundColor: item.id % 2 == 0 ? PRIMARYTXTCOLOR : BLACK,
                }}></View>
              <Text style={{color: BLACK}}>{item.data}kw</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-end',
    paddingBottom: '10%',
  },
});
