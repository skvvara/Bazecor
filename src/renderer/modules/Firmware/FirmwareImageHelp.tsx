/* eslint-disable jsx-a11y/media-has-caption */
// -*- mode: js-jsx -*-
/* Bazecor
 * Copyright (C) 2022  Dygmalab, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React, { useRef, useEffect } from "react";
import Styled from "styled-components";

import videoFirmwareUpdate from "@Assets/videos/update-firmware.mp4";
import videoFirmwareUpdateReleaseKey from "@Assets/videos/release-key.mp4";
import videoFirmwareUpdateDefySRC from "@Assets/videos/update-firmware-defy.mp4";
import videoFirmwareUpdateDefyReleaseSRC from "@Assets/videos/release-key-defy.mp4";

import FirmwareNeuronHelp from "@Renderer/modules/Firmware/FirmwareNeuronHelp";
import FirmwareDefyUpdatingStatus from "@Renderer/modules/Firmware/FirmwareDefyUpdatingStatus";

import { IconCheckmark } from "@Renderer/components/atoms/icons";
import BadgeFirmware from "@Renderer/component/Badge/BadgeFirmware";

const Style = Styled.div`
.updatingRaise {
  margin:auto;
  align-self: center;
  justify-content: center;
}
.blob {
  background: #33d9b2;
  box-shadow: 0 0 0 0 #33d9b2;
  border-radius: 50%;
  margin: 10px;
  height: 8px;
  width: 8px;
  transform: scale(1);

  // animation: pulse-green 2s infinite;
  transform: scale(1);
  box-shadow: 0 0 0 32px rgba(51, 217, 178, 0.15);
}
.processCanvas {
  position: relative;
  canvas {
    max-width: 100%;
  }
  .status-icon {
    position: absolute;
  }
  &.processRaise .status-icon {
    top: 62px;
    left: 85px;
  }
  &.processDefy .status-icon {
    top: 73px;
    left: 72px;
  }
}
.process-raise,
.process-Raise {
  background-position: left bottom;
  background-repeat: no-repeat;
  background-image: url(${({ theme }) => theme.styles.firmwareUpdateProcess.raiseSVG});
}
.process-defy,
.process-Defy {
  background-position: left bottom;
  background-repeat: no-repeat;
  background-image: url(${({ theme }) => theme.styles.firmwareUpdateProcess.defySVG});
}
.animPressDown {
  animation: animaPressDown  0.3s forwards;
  animation-timing-function: cubic-bezier(0.75, -1.27, 0.3, 2.33);
}
@keyframes animaPressDown {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

`;
/**
 * This FirmwareImageHelp function returns a video that reacts according the firmware update status
 * The object will accept the following parameters
 *
 * @param {number} countdown - Number representing the position during the update process
 * @returns {<FirmwareImageHelp>} FirmwareImageHelp component.
 */
interface FirmwareImageHelpProps {
  countdown: number;
  deviceProduct: string;
  keyboardType: string;
  steps: Array<string | number>;
  error: boolean;
  retriesLeft: number | undefined;
  retriesRight: number | undefined;
  retriesDefyWired: number | undefined;
  retriesNeuron: number | undefined;
}

const FirmwareImageHelp: React.FC<FirmwareImageHelpProps> = ({
  countdown,
  deviceProduct,
  keyboardType,
  steps,
  error,
  retriesLeft,
  retriesRight,
  retriesDefyWired,
  retriesNeuron,
}) => {
  const videoIntro = useRef<HTMLVideoElement | null>(null);
  const videoIntroDefy = useRef<HTMLVideoElement | null>(null);
  const videoReleaseDefy = useRef<HTMLVideoElement | null>(null);
  const videoRelease = useRef<HTMLVideoElement | null>(null);
  const checkSuccess = useRef(null);

  const isEndProcess = steps.length - 2;
  const productName = deviceProduct;

  const playVideo = () => {
    if (deviceProduct === "Raise" && videoIntro.current) {
      videoIntro.current.currentTime = 3;
      videoIntro.current.play();
    } else if (deviceProduct === "Defy" && videoIntroDefy.current) {
      videoIntroDefy.current.currentTime = 3;
      videoIntroDefy.current.play();
    }
  };

  useEffect(() => {
    const internalVideoIntro = videoIntro.current;
    const internalVideoRelease = videoRelease.current;
    const internalVideoIntroDefy = videoIntroDefy.current;
    const internalVideoReleaseDefy = videoReleaseDefy.current;

    if (countdown === 0) {
      if (productName === "Raise") {
        internalVideoIntro.addEventListener("ended", playVideo, false);
        internalVideoRelease.pause();
      } else if (productName === "Defy") {
        internalVideoIntroDefy.addEventListener("ended", playVideo, false);
        internalVideoReleaseDefy.pause();
      }
    }
    checkSuccess.current.classList.remove("animInCheck");
    if (countdown === 1) {
      if (productName === "Raise") {
        internalVideoIntro.classList.add("animOut");
        internalVideoRelease.classList.add("animPressDown");
      } else if (productName === "Defy") {
        internalVideoIntroDefy.classList.add("animOut");
        internalVideoReleaseDefy.classList.add("animIn");
        internalVideoReleaseDefy.play();
      }
      checkSuccess.current.classList.remove("animInCheck");
    }
    if (countdown === 2) {
      if (productName === "Raise") {
        internalVideoRelease.play();
      }
      checkSuccess.current.classList.remove("animInCheck");
    }
    if (countdown === isEndProcess) {
      checkSuccess.current.classList.add("animInCheck");
    }

    return () => {
      if (internalVideoIntro && countdown === 0 && productName === "Raise") {
        internalVideoIntro.removeEventListener("ended", playVideo, false);
      } else if (internalVideoIntroDefy && countdown === 0 && productName === "Defy") {
        internalVideoIntroDefy.removeEventListener("ended", playVideo, false);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdown]);

  return (
    <Style>
      <div className="process-row process-header">
        <div className="process-col process-image">
          <div className="videoWrapper">
            <div className="videoInner">
              <div className="firmwareCheck animWaiting" ref={checkSuccess}>
                <IconCheckmark size="sm" />
              </div>
              {deviceProduct === "Raise" ? (
                <>
                  <video ref={videoIntro} width={520} height={520} autoPlay className="img-center img-fluid">
                    <source src={videoFirmwareUpdate} type="video/mp4" />
                  </video>
                  <video
                    ref={videoRelease}
                    width={520}
                    height={520}
                    autoPlay={false}
                    className="img-center img-fluid animWaiting"
                  >
                    <source src={videoFirmwareUpdateReleaseKey} type="video/mp4" />
                  </video>
                  <BadgeFirmware countdown={countdown} />
                </>
              ) : (
                <>
                  <video ref={videoIntroDefy} width={520} height={520} autoPlay className="img-center img-fluid animIn">
                    <source src={videoFirmwareUpdateDefySRC} type="video/mp4" />
                  </video>
                  <video
                    ref={videoReleaseDefy}
                    width={520}
                    height={520}
                    autoPlay={false}
                    className="img-center img-fluid animWaiting"
                  >
                    <source src={videoFirmwareUpdateDefyReleaseSRC} type="video/mp4" />
                  </video>
                </>
              )}
            </div>
          </div>
        </div>
        <div className={`process-col process-neuron ${countdown === 0 ? `process-${deviceProduct}` : ""}`}>
          {countdown === 0 ? (
            <div className={`processCanvas process${deviceProduct}`}>
              <div className="status-icon">
                <div className="blob green pulse-green" />
              </div>
              <canvas className="" width={340} height={259} />
            </div>
          ) : (
            <div className={`${deviceProduct === "Defy" ? "updatingDefy" : ""} updatingRaise`}>
              {deviceProduct === "Defy" ? (
                <FirmwareDefyUpdatingStatus
                  countdown={countdown}
                  keyboardType={keyboardType}
                  retriesLeft={retriesLeft}
                  retriesRight={retriesRight}
                  retriesDefyWired={retriesDefyWired}
                  retriesNeuron={retriesNeuron}
                />
              ) : (
                <FirmwareNeuronHelp countdown={countdown} deviceProduct={deviceProduct} steps={steps} error={error} />
              )}
            </div>
          )}
        </div>
      </div>
    </Style>
  );
};

export default FirmwareImageHelp;
