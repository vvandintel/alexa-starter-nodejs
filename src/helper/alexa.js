function fillSlots() {
  if (this.event.request.dialogState !== 'COMPLETED') {
    this.emit(':delegate');
  }

  return this.event.request.intent;
}

function isSlotValid(alexaRequest, slotName) {
  const slot = alexaRequest.intent.slots[slotName];

  if (slot && slot.value) {
    return slot.value.toLowerCase();
  }

  return false;
}

module.exports.fillSlots = fillSlots;
module.exports.isSlotValid = isSlotValid;
