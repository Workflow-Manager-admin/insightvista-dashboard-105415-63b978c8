#!/bin/bash
cd /home/kavia/workspace/code-generation/insightvista-dashboard-105415-63b978c8/insightvista_dashboard
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

