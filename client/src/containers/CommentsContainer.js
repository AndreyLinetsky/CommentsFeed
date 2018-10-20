import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../actions';
import { containerPadding, StyledErrorField } from '../styles/commonStyles';
import FilterPanel from '../components/filter/FilterPanel';
import CommentsList from '../components/comments/CommentsList';
import {
  getCommentsSelector,
  getFilterCommentsErrorMessageSelector
} from '../selectors/commentFeedSelector';

const StyledContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  ${containerPadding};
`;

function mapStateToProps(state) {
  return {
    comments: getCommentsSelector(state),
    filterCommentsErrorMessage: getFilterCommentsErrorMessageSelector(state)
  };
}

class CommentsContainer extends React.Component {
  componentDidMount() {
    this.props.filterComments({ filterValue: '' });
  }

  render() {
    const {
      props: {
        filterComments,
        filterCommentsErrorMessage,
        comments
      },
    } = this;
   
    return (
      <StyledContainer>
        {filterCommentsErrorMessage && (
          <StyledErrorField>{filterCommentsErrorMessage}</StyledErrorField>
        )}
        <FilterPanel {...{ filterComments }} />
        <CommentsList {...{ comments }} />
      </StyledContainer>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(CommentsContainer);
