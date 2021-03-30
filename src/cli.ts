#!/usr/bin/env node
import { Command } from 'commander'
import { spawn } from 'child_process'

const cli = new Command()

cli
  .command('fmt')
  .description('Run formatter')
  .action(() => {
    npx('prettier', '--write', 'src/**/*.ts', '*.js')
  })

cli
  .command('fmt:check')
  .description('Check formatting')
  .action(() => {
    npx('prettier', '--check', 'src/**/*.ts', '*.js')
  })

cli
  .command('lint')
  .description('Run linter')
  .action(() => {
    npx('eslint', '--fix', 'src/**/*.ts', '*.js')
  })

cli
  .command('lint:staged')
  .description('Run linter on staged files')
  .action(() => {
    npx('lint-staged')
  })

cli
  .command('lint:prepare')
  .description('Install lint hooks')
  .action(() => {
    npx('husky', 'install')
  })

cli
  .command('lint:check')
  .description('Run linter')
  .action(() => {
    npx('eslint', 'src/**/*.ts', '*.js')
  })

cli
  .command('test')
  .description('Run tests')
  .action(() => {
    npx('jest')
  })

cli
  .command('test:cov')
  .description('Run tests with coverage')
  .action(() => {
    npx('jest', '--coverage')
  })

cli
  .command('test:cov')
  .description('Run tests in watch mode')
  .action(() => {
    npx('jest', '--watchAll')
  })

cli.parse(process.argv)

function npx(cmd: string, ...args: string[]) {
  spawn(cmd, args, { stdio: 'inherit' })
}
