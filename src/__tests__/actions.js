import * as actions from '../actions';
import * as types from '../actions/const';

describe('actions', () => {
  it('should change new course type', () => {
    const sort = 'external'
    const expectedAction = {
      type: types.NEW_COURSE_TYPE,
      sort
    }
    expect(actions.newCourseType(sort)).toEqual(expectedAction)
  })
})
