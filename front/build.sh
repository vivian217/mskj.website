#!/usr/bin/env bash

FINDNAME=$0
while [ -h $FINDNAME ] ; do FINDNAME=`ls -ld $FINDNAME | awk '{print $NF}'` ; done
RUNDIR=`echo $FINDNAME | sed -e 's@/[^/]*$@@'`
unset FINDNAME

# cd to top level agent home
if test -d $RUNDIR; then
  cd $RUNDIR/..
else
  echo 'ERROR'
  exit 1
fi

cd front

if [ -d $(pwd)/../static ]; then
  rm -rf $(pwd)/../static
fi
npm run build

echo '前端构建结束'
