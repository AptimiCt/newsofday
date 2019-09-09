const { pool } = require('../db/database')

function list(res, req, next){
    const limit = res.query.limit || 10
    const offset = res.query.offset || 0
    const select = `
    SELECT 
    id, 
    title, 
    bodytext, 
    path_to_image, 
    to_char(timestamp, 'DD.MM.YY') as date, 
    to_char(timestamp, 'HH24.MI') as time 
    FROM public.listnews order by id DESC limit ${limit} offset ${offset}`

    pool.query(select, (err, result) => {
      if (err){
        next(err.stack)
      } else {
        req.status(200).json(result.rows)
      }
    })
}

module.exports = list