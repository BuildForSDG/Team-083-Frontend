import React from 'react';
import { Grid } from '@chakra-ui/core';
import { useSelector } from 'react-redux';
import FunderCard from './FunderCard';

const FunderList = () => {
  const { width, bp2 } = useSelector((state) => state.resize);
  const funderList = [
    { name: 'test', avatarLink: '', category: 'IT' },
    { name: 'test', avatarLink: '', category: 'IT' },
    { name: 'test', avatarLink: '', category: 'IT' },
    { name: 'test', avatarLink: '', category: 'IT' },
    { name: 'test', avatarLink: '', category: 'IT' },
    { name: 'test', avatarLink: '', category: 'IT' },
    { name: 'test', avatarLink: '', category: 'IT' },
    { name: 'test', avatarLink: '', category: 'IT' },
    { name: 'test', avatarLink: '', category: 'IT' },
    { name: 'test', avatarLink: '', category: 'IT' }
  ];
  return (
    <Grid
      my="2rem"
      mx={width > bp2 ? '4rem' : '1rem'}
      alignItems="center"
      templateColumns={`repeat(${width > bp2 ? 2 : 1}, 1fr)`}
      columnGap="2rem"
      rowGap="3rem"
    >
      {funderList.map((x, i) => {
        return <FunderCard key={i} name={x.name} avatarLink={x.avatarLink} category={x.category} />;
      })}
    </Grid>
  );
};
// {"1fr 1fr"}

export default FunderList;
