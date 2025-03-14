#!/usr/bin/env -S python3 -u

# Note that running python with the `-u` flag is required on Windows,
# in order to ensure that stdin and stdout are opened in binary, rather
# than text, mode.

import sys
import json
import struct
import threading
from datetime import datetime

# Read a message from stdin and decode it.
def getMessage():
    rawLength = sys.stdin.buffer.read(4)
    if len(rawLength) == 0:
        sys.exit(0)
    messageLength = struct.unpack('@I', rawLength)[0]
    message = sys.stdin.buffer.read(messageLength).decode('utf-8')
    return json.loads(message)

# Encode a message for transmission,
# given its content.
def encodeMessage(messageContent):
    # https://docs.python.org/3/library/json.html#basic-usage
    # To get the most compact JSON representation, you should specify
    # (',', ':') to eliminate whitespace.
    # We want the most compact representation because the browser rejects # messages that exceed 1 MB.
    encodedContent = json.dumps(messageContent, separators=(',', ':')).encode('utf-8')
    encodedLength = struct.pack('@I', len(encodedContent))
    return {'length': encodedLength, 'content': encodedContent}

# Send an encoded message to stdout
def sendMessage(encodedMessage):
    sys.stdout.buffer.write(encodedMessage['length'])
    sys.stdout.buffer.write(encodedMessage['content'])
    sys.stdout.buffer.flush()

def stdProcess():
  while True:
    receivedMessage = getMessage()
    if receivedMessage == 'ping':
      sendMessage(encodeMessage(f'[{datetime.now()}]: pong'))
    else:
      sendMessage(encodeMessage(f'[{datetime.now()}]: relay - {receivedMessage}'))

def sendEvery5S():
   sendMessage(encodeMessage(f'[{datetime.now()}]: From native host'))
   threading.Timer(5.0, sendEvery5S).start()

def main():
  sendEvery5S()
  thread = threading.Thread(target=stdProcess)
  thread.daemon = True
  thread.start()

if __name__ == '__main__':
  main()
