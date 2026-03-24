const controllers = require('../../app_server/controllers/locations')

describe('locations controller', () => {
  test('homeList renders locations-list with expected data', () => {
    const req = {}
    const res = { render: jest.fn() }
    controllers.homeList(req, res)
    expect(res.render).toHaveBeenCalledWith('locations-list', expect.objectContaining({
      title: 'Loc8r - find a place to work with wifi',
      pageHeader: expect.objectContaining({ title: 'Loc8r' }),
      locations: expect.any(Array)
    }))
  })

  test('locationInfo renders location-info with title', () => {
    const req = {}
    const res = { render: jest.fn() }
    controllers.locationInfo(req, res)
    expect(res.render).toHaveBeenCalledWith('location-info', expect.objectContaining({
      title: 'Location Info'
    }))
  })

  test('addReview renders location-review-form with title', () => {
    const req = {}
    const res = { render: jest.fn() }
    controllers.addReview(req, res)
    expect(res.render).toHaveBeenCalledWith('location-review-form', expect.objectContaining({
      title: 'Add Review'
    }))
  })
})
