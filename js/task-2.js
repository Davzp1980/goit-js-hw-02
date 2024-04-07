function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  } else {
    const longMessage = message.slice(0, maxLength) + '...';
    return longMessage;
  }
}
