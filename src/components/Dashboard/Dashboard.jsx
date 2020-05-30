import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/core';
import SummaryCards from './SummaryCards';
import IncomeExpenseCharts from './IncomeExpenseCharts';
import RecentTransactions from './RecentTransactions';
import TotalExpensePie from './TotalExpensePie';

const Dashboard = () => {
  return (
    <Box>
      <Flex justify="space-between">
        <Text>Dashboard </Text>
      </Flex>
      <SummaryCards />
      <TotalExpensePie />
      <IncomeExpenseCharts />
      <RecentTransactions />
    </Box>
  );
};

export default Dashboard;
