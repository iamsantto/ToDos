import _ from 'lodash'
import gulp from 'gulp'
import requireDir from 'require-dir'
import dotenv from 'dotenv'

dotenv.config()

const tasks = requireDir('./tasks')

_.forOwn(tasks, (task, name) => {
  if (name !== 'config')
    gulp.task(name, task.depends, _.isFunction(task) ? task : undefined)
})
