import {
  DistributionHandled as DistributionHandledEvent,
  FundsTransferred as FundsTransferredEvent,
  StreamSetup as StreamSetupEvent,
  WhitelistedCollectorUpdated as WhitelistedCollectorUpdatedEvent,
} from "../generated/CapyCore/CapyCore"
import {
  DistributionHandled,
  FundsTransferred,
  StreamSetup,
  WhitelistedCollectorUpdated,
} from "../generated/schema"

export function handleDistributionHandled(
  event: DistributionHandledEvent,
): void {
  let entity = new DistributionHandled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.poolId = event.params.poolId
  entity.token = event.params.token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundsTransferred(event: FundsTransferredEvent): void {
  let entity = new FundsTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.poolId = event.params.poolId
  entity.capyNftId = event.params.capyNftId
  entity.recipient = event.params.recipient
  entity.collected = event.params.collected

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStreamSetup(event: StreamSetupEvent): void {
  let entity = new StreamSetup(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.poolId = event.params.poolId
  entity.token = event.params.token
  entity.recipient = event.params.recipient
  entity.recipientDriverAccountId = event.params.recipientDriverAccountId
  entity.capyNftId = event.params.capyNftId
  entity.amountPerSecond = event.params.amountPerSecond
  entity.duration = event.params.duration
  entity.totalAllocation = event.params.totalAllocation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWhitelistedCollectorUpdated(
  event: WhitelistedCollectorUpdatedEvent,
): void {
  let entity = new WhitelistedCollectorUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.poolId = event.params.poolId
  entity.collector = event.params.collector
  entity.isWhitelisted = event.params.isWhitelisted

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
