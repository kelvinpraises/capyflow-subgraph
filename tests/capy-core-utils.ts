import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  DistributionHandled,
  FundsTransferred,
  StreamSetup,
  WhitelistedCollectorUpdated
} from "../generated/CapyCore/CapyCore"

export function createDistributionHandledEvent(
  poolId: BigInt,
  token: Address
): DistributionHandled {
  let distributionHandledEvent = changetype<DistributionHandled>(newMockEvent())

  distributionHandledEvent.parameters = new Array()

  distributionHandledEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  distributionHandledEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return distributionHandledEvent
}

export function createFundsTransferredEvent(
  poolId: BigInt,
  capyNftId: BigInt,
  recipient: Address,
  collected: BigInt
): FundsTransferred {
  let fundsTransferredEvent = changetype<FundsTransferred>(newMockEvent())

  fundsTransferredEvent.parameters = new Array()

  fundsTransferredEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  fundsTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "capyNftId",
      ethereum.Value.fromUnsignedBigInt(capyNftId)
    )
  )
  fundsTransferredEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  fundsTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "collected",
      ethereum.Value.fromUnsignedBigInt(collected)
    )
  )

  return fundsTransferredEvent
}

export function createStreamSetupEvent(
  poolId: BigInt,
  token: Address,
  recipient: Address,
  recipientDriverAccountId: BigInt,
  capyNftId: BigInt,
  amountPerSecond: BigInt,
  duration: BigInt,
  totalAllocation: BigInt
): StreamSetup {
  let streamSetupEvent = changetype<StreamSetup>(newMockEvent())

  streamSetupEvent.parameters = new Array()

  streamSetupEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  streamSetupEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  streamSetupEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  streamSetupEvent.parameters.push(
    new ethereum.EventParam(
      "recipientDriverAccountId",
      ethereum.Value.fromUnsignedBigInt(recipientDriverAccountId)
    )
  )
  streamSetupEvent.parameters.push(
    new ethereum.EventParam(
      "capyNftId",
      ethereum.Value.fromUnsignedBigInt(capyNftId)
    )
  )
  streamSetupEvent.parameters.push(
    new ethereum.EventParam(
      "amountPerSecond",
      ethereum.Value.fromUnsignedBigInt(amountPerSecond)
    )
  )
  streamSetupEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )
  streamSetupEvent.parameters.push(
    new ethereum.EventParam(
      "totalAllocation",
      ethereum.Value.fromUnsignedBigInt(totalAllocation)
    )
  )

  return streamSetupEvent
}

export function createWhitelistedCollectorUpdatedEvent(
  poolId: BigInt,
  collector: Address,
  isWhitelisted: boolean
): WhitelistedCollectorUpdated {
  let whitelistedCollectorUpdatedEvent =
    changetype<WhitelistedCollectorUpdated>(newMockEvent())

  whitelistedCollectorUpdatedEvent.parameters = new Array()

  whitelistedCollectorUpdatedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  whitelistedCollectorUpdatedEvent.parameters.push(
    new ethereum.EventParam("collector", ethereum.Value.fromAddress(collector))
  )
  whitelistedCollectorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "isWhitelisted",
      ethereum.Value.fromBoolean(isWhitelisted)
    )
  )

  return whitelistedCollectorUpdatedEvent
}
