import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  StrategyCreated
} from "../generated/CapyTrustStrategyFactory/CapyTrustStrategyFactory"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createStrategyCreatedEvent(
  owner: Address,
  strategyAddress: Address,
  name: string,
  avatar: string,
  description: string
): StrategyCreated {
  let strategyCreatedEvent = changetype<StrategyCreated>(newMockEvent())

  strategyCreatedEvent.parameters = new Array()

  strategyCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  strategyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "strategyAddress",
      ethereum.Value.fromAddress(strategyAddress)
    )
  )
  strategyCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  strategyCreatedEvent.parameters.push(
    new ethereum.EventParam("avatar", ethereum.Value.fromString(avatar))
  )
  strategyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )

  return strategyCreatedEvent
}
