import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import FilterField from './FilterField';
import FilterButton from './FilterButton';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid lightgrey;
  :focus-within {
    border: 1px solid blue;
  }
`;

export default class FilterPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterValue: ''
    };
  }

  onFilterChange = event => {
    this.setState({ filterValue: event.target.value });
  };

  onSubmitFilter = () => {
    const {
      props: { filterComments },
      state: { filterValue }
    } = this;
    filterComments({ filterValue });
  };

  render() {
    const {
      state: { filterValue },
      onSubmitFilter,
      onFilterChange
    } = this;
    const fieldProps = {
      onChange: onFilterChange,
      value: filterValue
    };
    const buttonProps = {
      onClick: onSubmitFilter
    };
    return (
      <StyledContainer>
        <FilterButton {...buttonProps} />
        <FilterField {...fieldProps} />
      </StyledContainer>
    );
  }
}

FilterPanel.propTypes = {
  filterComments: PropTypes.func
};
