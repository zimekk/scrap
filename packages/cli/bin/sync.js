#!/usr/bin/env node --max_old_space_size=4096

require("../lib").sync(...process.argv.slice(2));
